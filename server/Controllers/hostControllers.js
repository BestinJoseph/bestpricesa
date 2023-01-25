
export const homeController = (req, res) => {
    res.status(200).json({errors: null, data: {msg: 'home page data.'}})
}