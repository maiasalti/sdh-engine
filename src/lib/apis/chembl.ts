const BASE_URL = "https://www.ebi.ac.uk/chembl/api/data";

export type ChemblMolecule = {
  chemblId: string;
  prefName: string;
  moleculeType: string;
  maxPhase: number;
  oralAvailable: boolean;
  indication: string;
};

export type ChemblMechanism = {
  mechanismOfAction: string;
  targetChemblId: string;
  targetName: string;
  actionType: string;
};

/** Get molecule details by ChEMBL ID */
export async function getMolecule(
  chemblId: string
): Promise<ChemblMolecule | null> {
  const res = await fetch(`${BASE_URL}/molecule/${chemblId}.json`);
  if (!res.ok) return null;

  const data = await res.json();

  return {
    chemblId: data.molecule_chembl_id || chemblId,
    prefName: data.pref_name || "",
    moleculeType: data.molecule_type || "",
    maxPhase: data.max_phase || 0,
    oralAvailable: data.oral === true,
    indication: data.indication_class || "",
  };
}

/** Get mechanisms of action for a molecule */
export async function getMechanisms(
  chemblId: string
): Promise<ChemblMechanism[]> {
  const res = await fetch(
    `${BASE_URL}/mechanism.json?molecule_chembl_id=${chemblId}`
  );
  if (!res.ok) return [];

  const data = await res.json();

  return (data.mechanisms || []).map(
    (m: Record<string, unknown>) => ({
      mechanismOfAction: (m.mechanism_of_action as string) || "",
      targetChemblId: (m.target_chembl_id as string) || "",
      targetName: (m.target_pref_name as string) || "",
      actionType: (m.action_type as string) || "",
    })
  );
}

/** Search for bioactivity data for a target */
export async function getTargetBioactivity(
  targetChemblId: string,
  minPchembl: number = 6,
  maxResults: number = 25
) {
  const res = await fetch(
    `${BASE_URL}/activity.json?target_chembl_id=${targetChemblId}&pchembl_value__gte=${minPchembl}&limit=${maxResults}`
  );
  if (!res.ok) return [];

  const data = await res.json();

  return (data.activities || []).map(
    (a: Record<string, unknown>) => ({
      moleculeChemblId: a.molecule_chembl_id,
      moleculeName: a.molecule_pref_name || "Unknown",
      standardType: a.standard_type,
      standardValue: a.standard_value,
      standardUnits: a.standard_units,
      pchemblValue: a.pchembl_value,
      assayType: a.assay_type,
    })
  );
}
