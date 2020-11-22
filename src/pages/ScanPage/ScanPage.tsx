import { IonContent, IonPage } from '@ionic/react';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class ScanPage extends Component {
    state = {
        value: '',
        latitude: '',
        longitude: ''
    }

    componentDidMount() {

    }

    // openScanner = async () => {
    //     const data = await BarcodeScanner.scan(
    //         {
    //             // preferFrontCamera : true,
    //             // showFlipCameraButton : true,
    //             showTorchButton : true,
    //             prompt : "Place a barcode inside the scan area",
    //         }
    //     );
    //     console.log(data);
    //     this.setState({
    //         value: data.text
    //     });
    //     // console.log(`Barcode data: ${data.text}`);
    // };

    // getLocation = async () => {
    //     try {
    //         await Geolocation.getCurrentPosition()
    //         .then((result) => {
    //             console.log(result);
    //             this.setState({
    //                 latitude: result.coords.latitude,
    //                 longitude: result.coords.longitude
    //             })
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // qrScan = async () => {
    //     try {
    //         await QRScanner.prepare()
    //         .then((status) => {
    //             if(status.authorized) {
    //                 // Akses ke camera diizinkan
                    
    //                 // Mulai scan
    //                 QRScanner.show();
    //                 const Scan = QRScanner.scan().subscribe((result) => {
    //                     Scan.unsubscribe();
    //                     console.log(result);
    //                 });
    //             } else if(status.denied) {
    //                 console.log('denied!');
    //             }
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    render() {
        return (
            <>
                <IonPage>
                    <IonContent>
                        <ExploreContainer name="Scan" />
                    </IonContent>
                </IonPage>
            </>
        )
    }
}

export default ScanPage;