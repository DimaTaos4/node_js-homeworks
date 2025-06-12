import * as appServiсe from '../services/apps.service.js'


export const getAppsController = async (req, res) => {
    const result = await appServiсe.getApps()
    res.json(result)
}
export const addAppsController = async (req, res) => {
    const result = await appServiсe.addApps(req.body)
    res.status(201).json(result)
}