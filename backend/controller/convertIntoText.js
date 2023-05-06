const speechScorer = require("word-error-rate");

const { Configuration, OpenAIApi } = require('openai')


const config = new Configuration({
    apiKey: "" //openai key
})



const transcribe = async (buffer) => {

    const openai = new OpenAIApi(config);

    const response = await openai.createTranscription(
        buffer,
        "whisper-1",
        undefined,
        'json',
        1,
        'en'
    )

    return response;
}


const convertIntoText = async (req, res) => {

    const audio_file = req.files[0];
    const buffer = audio_file.buffer;
    buffer.name = audio_file.originalname;

    const resp = await transcribe(buffer);

    const data = await resp.data

    // const data = resp.then((data) => console.log(data.data.text));

    const incoming_str = data.text;



    const accur = speechScorer.wordErrorRate(incoming_str, "This is my family. I live in a city.")

    res.status(200).json({ accuracy: accur, transcribe: incoming_str })

    console.log(accur);

}

module.exports = { convertIntoText };