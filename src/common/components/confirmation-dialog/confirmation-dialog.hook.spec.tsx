import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { Lookup } from 'common/models';

describe('useConfirmationDialog spec',() =>{
  it('should set isOpen to true when the dialog is opened',() => {
    //arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const itemDelete: Lookup = {
      id: 'id test',
      name: 'name test',
    }
    //act
    act(() => {
      result.current.onOpenDialog(itemDelete);
    });
    //arrange
    expect(result.current.isOpen).toBeTruthy()

  })
  it('should set isOpen to false when the dialog is closed', () =>{
    //arrange
    const { result } = renderHook(() => useConfirmationDialog());

    //act
     act(() => {
       result.current.onClose()

       //assert
       expect(result.current.isOpen).toBeFalsy()
     })
  })
})
