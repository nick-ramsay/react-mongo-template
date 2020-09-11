import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    createMessage: function (message, created_date) {
        console.log("Called createMessage API...");
        console.log(message, created_date);
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template/create-message", data: {message, created_date} });
    },
    findAllMessages: function () {
        console.log("Called find all messages API...");
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template/find-all-messages", data: {} });
    }
};