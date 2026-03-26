// React Native SDK for Mobile App Integration with Offline Support

import { NativeModules } from 'react-native';

const { OfflineApiBridge } = NativeModules;

const OffLineApiSdk = {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch failed', error);
            throw error;
        }
    },
    async saveData(key, value) {
        try {
            await OfflineApiBridge.saveData(key, value);
        } catch (error) {
            console.error('Save failed', error);
            throw error;
        }
    },
    async getData(key) {
        try {
            const value = await OfflineApiBridge.getData(key);
            return value;
        } catch (error) {
            console.error('Get failed', error);
            throw error;
        }
    }
};

export default OffLineApiSdk;
