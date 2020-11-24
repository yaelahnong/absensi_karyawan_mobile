import { IonCol, IonItem, IonList, IonText } from '@ionic/react';
import React from 'react';

interface ContainerProps {
    time: string,
    description: string,
    status: number
}

const AttendanceComp: React.FC<ContainerProps> = ({time, description, status}) => {
    return (
        <IonList>
            <IonItem>
                <IonCol size="6">
                    <IonText color={status === 1 ? 'danger' : ''}>{time}</IonText>
                </IonCol>
                <IonCol size="6">
                    <IonText>{description}</IonText>
                </IonCol>
            </IonItem>
        </IonList>
    )
}

export default AttendanceComp;