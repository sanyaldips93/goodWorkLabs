

exports.postMetaData = (req, res, next) => {
    const module_name = req.body.module_name;
    const screen_name = req.body.screen_name;

    res.redirect(`/get-meta-data/${module_name}/${screen_name}`);
};

