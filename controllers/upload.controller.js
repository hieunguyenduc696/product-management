const uploadFile = async (req, res, next) => {
    const { file } = req;

    if (!file) {
        return res.status(400).json({
            status: 400,
            msg: 'Missing image'
        });
    }

    return res.status(201).json({
        status: 201,
        path: file.path
    });
};

module.exports = {
    uploadFile,
};
