import App from "../db/App.js"

export const getApps = () => App.findAll()
export const addApps = payload => App.create(payload)