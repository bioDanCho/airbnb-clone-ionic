import React from 'react';
import './FilterModalPage.scss';
import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
import { IoClose } from 'react-icons/io5';
import Button from '../../atoms/Button/Button';
import CheckboxList from '../../organisms/FilterModalOrgs/CheckboxList/CheckboxList';
import {
    typeOfPlaceData,
    amenitiesData,
    bookingOptionsData,
    accessibilityFeaturesData,
    topTierStaysData,
    hostLanguageData,
} from '../../../assets/data/filter-data';
import ToggleList from '../../organisms/FilterModalOrgs/ToggleList/ToggleList';
import PropertyTypeSection from '../../organisms/FilterModalOrgs/PropertyTypeSection/PropertyTypeSection';
import RoomsAndBedsSection from '../../organisms/FilterModalOrgs/RoomsAndBedsSection/RoomsAndBedsSection';
import PriceRangeSection from '../../organisms/FilterModalOrgs/PriceRangeSection/PriceRangeSection';

const FilterModalPage = (props) => {
    const { closeModal } = props;

    const clearBtnStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        backgroundColor: 'transparent',
    };

    const showBtnStyle = {
        backgroundColor: '#000',
        color: '#FFF',
        fontWeight: 'bold',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
    };

    return (
        <IonPage className='FilterModalPage_container'>
            <IonHeader className='FilterModalPage_header'>
                <div className='close_btn'>
                    <Button
                        btnContent={<IoClose size={28} onClick={closeModal} />}
                        btnStyleOverride={{ backgroundColor: 'transparent' }}
                    />
                </div>
                <div className='filter_title'>Filters</div>
            </IonHeader>
            <IonContent>
                <div className='FilterModalPage_content'>
                    <PriceRangeSection />
                    <div className='divider_line' />

                    <CheckboxList
                        headingText={'Type of place'}
                        checkboxData={typeOfPlaceData}
                    />
                    <div className='divider_line' />

                    <RoomsAndBedsSection />
                    <div className='divider_line' />

                    <PropertyTypeSection />
                    <div className='divider_line' />

                    <CheckboxList
                        headingText={'Amenities'}
                        checkboxData={amenitiesData}
                        isExpandable={true}
                        numItemsCollapsed={2}
                    />
                    <div className='divider_line' />

                    <ToggleList
                        headingText={'Booking options'}
                        toggleListData={bookingOptionsData}
                    />
                    <div className='divider_line' />

                    <CheckboxList
                        headingText={'Accessibility features'}
                        descTextExpanded={
                            'This info was provided by the Host and reviewed by Airbnb.'
                        }
                        checkboxData={accessibilityFeaturesData}
                        isExpandable={true}
                        numItemsCollapsed={2}
                    />
                    <div className='divider_line' />

                    <ToggleList
                        headingText={'Top tier stays'}
                        toggleListData={topTierStaysData}
                    />
                    <div className='divider_line' />

                    <CheckboxList
                        headingText={'Host language'}
                        checkboxData={hostLanguageData}
                        isExpandable={true}
                        numItemsCollapsed={3}
                    />
                </div>
            </IonContent>
            <IonFooter className='FilterModalPage_footer'>
                <div className='clear_btn'>
                    <Button
                        btnContent={'Clear all'}
                        btnStyleOverride={clearBtnStyle}
                    />
                </div>
                <div className='show_btn'>
                    <Button
                        btnContent={'Show 777 homes'}
                        btnStyleOverride={showBtnStyle}
                        onButtonClick={closeModal}
                    />
                </div>
            </IonFooter>
        </IonPage>
    );
};

export default FilterModalPage;
