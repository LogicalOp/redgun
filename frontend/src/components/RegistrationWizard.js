import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wizard, WizardStep, Button, MessageStrip, MessageStripDesign, CheckBox, Input, Title, Label, WrappingType, ButtonDesign } from '@ui5/webcomponents-react';

const RegistrationWizard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('1');
  const [disabled, setDisabled] = useState({ '2': true });
  const [hidden, setHidden] = useState({ finalizeBtn: true });
  const [showPasswordStep, setShowPasswordStep] = useState(false);

  const goToStep2 = () => {
    setDisabled((prev) => {
      const { '2': _omit, ...rest } = prev;
      return rest;
    });
    setSelected('2');
    setShowPasswordStep(true);
  };

    const finalizeRegistration = () => {
      alert('Registration is now completed!');
      navigate('/');
    };

    const handleStep1Completed = (e) => {
      if (e.target.value) {
        setDisabled((prev) => {
          const { '2': _omit, ...rest } = prev;
          return rest;
        });
      }
    };

    const handleStep2Completed = (e) => {
      if (e.target.value) {
        setHidden((prev) => {
          const { finalizeBtn: _omit, ...rest } = prev;
          return rest;
        });
      }
    };

    const handleStepChange = (e) => {
      setSelected(e.detail.step.dataset.step);
      if (e.detail.step.dataset.step === '1') {
        setShowPasswordStep(false);
      } else if (e.detail.step.dataset.step === '2') {
        setShowPasswordStep(true);
      }
    };

    return (
      <div style={{ width: '90vw', paddingLeft: '150px' }}>
        <Wizard onStepChange={handleStepChange}>
          <WizardStep titleText="Step 1: User Information" selected={selected === '1'} data-step={'1'}>
            {!showPasswordStep && (
              <>
                <Title>1. User Information</Title>
                <Input placeholder="Username" onInput={handleStep1Completed} />
                <br />
                <Input placeholder="Email" onInput={handleStep1Completed} />
                <br />
                <Button design={ButtonDesign.Emphasized} onClick={goToStep2} disabled={disabled['2']}>
                  Next
                </Button>
              </>
            )}
          </WizardStep>
          {showPasswordStep && (
            <WizardStep titleText="Step 2: Password" disabled={disabled['2']} selected={selected === '2'} data-step={'2'}>
              <Title>2. Password</Title>
              <Input placeholder="Password" type="password" onInput={handleStep2Completed} />
              <br />
              <Input placeholder="Confirm Password" type="password" onInput={handleStep2Completed} />
              <br />
              {!hidden['finalizeBtn'] && (
                <Button design={ButtonDesign.Emphasized} onClick={finalizeRegistration}>
                  Register
                </Button>
              )}
            </WizardStep>
          )}
        </Wizard>
      </div>
    );
};

export default RegistrationWizard;