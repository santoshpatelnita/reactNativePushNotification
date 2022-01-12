import PushNotification from 'react-native-push-notification'

const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: '1', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

const showNotification = (title, message) =>{
    PushNotification.localNotification({
    title: title,
    message: message,
    });
};

const handleScheduleNotification = (title, message) =>{
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: new Date(Date.now() + 5 * 1000),
    });
};

const handleCancel = () =>{
    PushNotification.cancelAllLocalNotifications()
};

export {showNotification, handleScheduleNotification, handleCancel, createChannel}