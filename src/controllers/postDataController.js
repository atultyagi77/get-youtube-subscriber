exports.checkPostData = (req, res) => {
    const receivedData = req.body;
    console.log('Received POST data:', receivedData);

    // Send a response back to the client
    res.json({
        message: 'POST data received successfully!',
        data: receivedData
    });
};
