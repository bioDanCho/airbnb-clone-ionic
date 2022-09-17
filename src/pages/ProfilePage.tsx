import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ProfilePage.scss';

const ProfilePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Profile Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name='Profile Page' />
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;
