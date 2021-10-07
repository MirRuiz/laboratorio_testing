import { mapEmployeeSummaryListFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('mapper specs', () => {
  it('should return empty array when it feeds undefined', () => {
    //arrage
    const members: apiModel.EmployeeSummary[] = undefined;
    //act
    const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(members);

    //assert
    expect(result).toEqual([]);
  });

  it('should return empty array when it feeds null', () => {
    //arrage
    const members: apiModel.EmployeeSummary[] = null;

    //act
    const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(members);

    //assert
    expect(result).toEqual([]);
  });
  
  it('should return empty array when it feeds []', () => {
    //arrage
    const members: apiModel.EmployeeSummary[] = [];

    //act
    const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(members);

    //assert
    expect(result).toEqual([]);
  });

  it('should return an array when it feeds array with one item', () => {
    //arrage
    const members: apiModel.EmployeeSummary[] = [
      { id: '1', isAssigned: true, employeeName: 'Miriam Ruiz' },
    ];

    //act
    const result: viewModel.EmployeeSummary[] =
      mapEmployeeSummaryListFromApiToVm(members);

    //assert
    const expectedResult: viewModel.EmployeeSummary[] = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Miriam Ruiz',
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
