module.exports.handler = async event => {

    return {
        statusCode: 301,
        headers: {
            "Location": "https://builder.jhbadge.com",
        },
        body: "Redirecting to https://builder.jhbadge.com...",
    }

};
