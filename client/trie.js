const url = "https://9a2qea.deta.dev/";
const axios = require("axios");

module.exports = {
    async display(item) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    },
    async reset() {
        try {
            const response = await axios.get(url + "reset/");
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    },
    async add(item) {
        try {
            const response = await axios.get(`${url}add/${item}`);
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    },

    async delete(item) {
        try {
            const response = await axios.get(`${url}delete/${item}`);
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    },
    async contains(item) {
        try {
            const response = await axios.get(`${url}contains/${item}`);
            return response.data;
        } catch (error) {
            console.error(error.message);
        }
    },
    async autocomplete(item) {
        try {
            const response = await axios.get(`${url}autocomplete/${item}`);
            return response.data || [];
        } catch (error) {
            console.error(error.message);
        }
    },
};
