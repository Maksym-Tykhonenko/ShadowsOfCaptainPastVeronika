import {View} from 'react-native';

const TestScr = () => {
  const generateLink = async () => {
    try {
      const baseUrl = [
        `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`,
        idfa && `idfa=${idfa}`,
        appsUid && `uid=${appsUid}`,
        customerUserId && `customerUserId=${customerUserId}`,
        idfv && `idfv=${idfv}`,
        oneSignalId && `oneSignalId=${oneSignalId}`,
        `jthrhg=${timeStampUserId}`,
      ]
        .filter(Boolean)
        .join('&');

      // Логіка обробки sab1
      let additionalParams = '';
    } catch (error) {
      console.error('Error generating link:', error);
    }
  };

  return <View></View>;
};
