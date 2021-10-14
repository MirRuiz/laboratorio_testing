import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent spec', () => {
  it('should call onAccept when the accept button is clicked', () => {
    //Arrage
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'test close',
        acceptButton: 'test open',
      },
    };
    //Act


    render(<ConfirmationDialogComponent {...props}/>);
    const acceptButton = screen.getByRole('button', {
      name: 'test open',
    });
    userEvent.click(acceptButton);

    // Assert
    expect(acceptButton).toBeInTheDocument();
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClose when the close button is clicked',() =>{
    //Arrage
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels:{
        closeButton: 'test close',
        acceptButton: 'test open',
      }
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getByRole('button', {
      name: 'test close'
    });
    userEvent.click(closeButton);

    //Assert

    expect(closeButton).toBeInTheDocument();
    expect(props.onClose).toHaveBeenCalled()
  })
});

