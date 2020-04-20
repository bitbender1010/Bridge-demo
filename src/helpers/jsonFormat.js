const jsonFormatter = {
    error(res, description, code, data){
        res.status(code);
        res.json({
            status : "error",
            description,
            data
        })
    },

    success(res, description, rowCount, data, code){
        res.status(code ? code : 200);
        res.json({
            status : "success",
            description,
            rowCount,
            data
        })
    }
}

export default jsonFormatter;