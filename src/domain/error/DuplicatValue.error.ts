export class DuplicatValueError extends Error {
  code = 1155;

  constructor(public errorDTO: { errorData: { columnName: string, duplicateValue: string }, message: string }) {
    super(errorDTO.message || `Duplicate value '${errorDTO.errorData.duplicateValue}' for column '${errorDTO.errorData.columnName}'`);
  }
}
