import React, { useState } from 'react';
import { PortfolioCompanyProps } from '@/types/institutionalInvestors/portfolioCompany';
// State Management
import { useAtom, useSetAtom } from 'jotai';
import { newPorfolioCompanyAtom, portfolioCompaniesAtom } from '@/jotai/institutionalInvestors/portfolioCompanies';
import { isShowNotificationAtom, notificationHeaderAtom, notificationTypeAtom } from '@/jotai/notifications/notification';
// Hooks
import useRedirect from '@/utils/hooks/navigation/useRedirect';
// Functions
import { resetPortfolioCompany } from '@/utils/functions/stateManagement/portfolioCompany';
// Internal Lists
import industriesList from '@/lists/industriesList';
import transactionTypesList from '@/lists/transactionTypesList';
// Internal Components
import ScreenLayout from '@/components/Containers/ScreenLayout';
import SimpleSectionHeading from '@/components/Headings/SectionHeadings/SimpleSectionHeading';
import TextInput from '@/components/Forms/TextInput/TextInput';
import MultiLineTextInput from '@/components/Forms/TextInput/MultiLineTextInput';
import DropBoxFeedback from '@/components/Feedback/DropBoxFeedback';
import FormLabelContainer from '@/components/Forms/Headers/FormLabelContainer';
import SelectMenuWithIcon from '@/components/Forms/SelectMenus/SelectMenuWithIcon';
import InlineListRadioGroup from '@/components/Forms/RadioGroups/InlineListRadioGroup';
import AlertModalDialogue from '@/components/Overlays/ModalDialogues/AlertModalDialogue';

const InstitutionalInvestorsAddCompanyScreen = () => {
    
    // Hooks
    const handleRedirect = useRedirect();

    // Constants
    const errorKeyValues = { name: '', about: '', transactionType: '' }

    // Local State
    const [isCancelAlertOpen, setIsCancelAlertOpen] = useState(false)
    const [formErrors, setFormErrors] = useState(errorKeyValues);

    // Global State
    const [newCompany, setNewCompany] = useAtom(newPorfolioCompanyAtom)
    const setPortfolioCompanies = useSetAtom(portfolioCompaniesAtom)

    const setIsShowNotification = useSetAtom(isShowNotificationAtom);
    const setNotificationHeader = useSetAtom(notificationHeaderAtom);
    const setNotificationType = useSetAtom(notificationTypeAtom);

    const handleResetAddPortfolioCompany = () => {
        handleRedirect('/dashboard')
        setNewCompany(resetPortfolioCompany())
    }

    const handleCancelCompanyForm = () => {
        setIsCancelAlertOpen(false);
        handleResetAddPortfolioCompany()
    };

    const validateForm = () => {
        let isValid = true;
        const validationErrors = errorKeyValues;

        if (newCompany.name.length < 3) {
            validationErrors.name = 'Please enter the legal company name.';
            isValid = false;
        }

        if (!newCompany.transactionType) {
            validationErrors.transactionType = 'Please select a transaction type.';
            isValid = false;
        }

        setFormErrors(validationErrors);
        return isValid;
    };

    const handleSubmitNewCompany = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const company = newCompany

        handleResetAddPortfolioCompany()
        setNotificationHeader(`Add portfolio company...`);
        setNotificationType('Warning');
        setIsShowNotification(true);

        setTimeout(() => {
            setNotificationType('Success');
            setNotificationHeader(`${company?.name} successfully added!`);
            setPortfolioCompanies((prevState: PortfolioCompanyProps[]) => [
                ...prevState,
                {
                    id: 100, // to be database generated
                    logo: '',
                    initial: company.name.slice(0,2),
                    path: '',
                    ...company
                }
            ]);
        }, 3000);
    }

    return (
        <ScreenLayout>
            <SimpleSectionHeading header={'Add a portfolio company'} size={'h1'} />
            <form>
                <div className="space-y-12">
                    <SimpleSectionHeading header={'Company details'} size={'h3'} />
                    <div className="mt-8 grid grid-cols-1 gap-y-8">
                        <div className="lg:w-1/4 min-w-[250px] mb-8">
                            <FormLabelContainer header={'Logo'} />
                            <DropBoxFeedback
                                description={"PNG, JPG, GIF up to 10MB"}
                                button={{
                                    label: "Upload a file",
                                    onClick: () => console.log('Upload file called')
                                }}
                            />
                        </div>
                        <TextInput
                            required
                            header={'Legal name'}
                            placeholder={'MNO Corp'}
                            inputValue={'name'}
                            value={newCompany.name}
                            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                            error={formErrors.name}
                        />
                        <MultiLineTextInput 
                            header={'About'}
                            inputValue={'name'}
                            value={newCompany.about}
                            onChange={(e) => setNewCompany({ ...newCompany, about: e.target.value })}
                            error={formErrors.about}
                        />
                        <SelectMenuWithIcon
                            required
                            header={'Industry'}
                            list={industriesList}
                            selectedItem={newCompany.industry}
                            setSelectedItem={(industry: string) => setNewCompany(prevState => ({ ...prevState, industry }))}
                        />
                        <InlineListRadioGroup 
                            required
                            header={'Transaction type'}
                            list={transactionTypesList}
                            selectedItem={newCompany.transactionType}
                            setSelectedItem={(value: string) => setNewCompany(prevState => ({ ...prevState, transactionType: value }))}
                            error={formErrors.transactionType}
                        />
                    </div>
                </div>
                <div className="mt-12 flex items-center justify-end gap-x-6">
                    <button 
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => setIsCancelAlertOpen(true)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleSubmitNewCompany}
                    >
                        Add company
                    </button>
                </div>
            </form>
            {isCancelAlertOpen ? (
                <AlertModalDialogue
                    header={`Cancel company form`}
                    description={'Are you sure? This action cannot be undone.'}
                    isOpen={isCancelAlertOpen}
                    setIsOpen={handleCancelCompanyForm}
                    primaryButton={{
                        label: "Yes, I'm sure",
                        type: 'Danger',
                        onClick: handleCancelCompanyForm
                    }}
                />
            ) : (null)}
        </ScreenLayout>
    )
}

export default InstitutionalInvestorsAddCompanyScreen;


