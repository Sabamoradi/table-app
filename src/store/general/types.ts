// types . . .

export interface State {
    status: 'idle' | 'loading' | 'failed';
    closeModal:boolean;
    showNotification:boolean;
    notificationTitle:string
};