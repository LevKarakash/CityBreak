import express from 'express';
import multer from 'multer';
import axios from 'axios';
import session from 'express-session';

const app = express()
const upload = multer();


app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


async function fetchAnswer(history) {
    try {

        // Tutaj trzeba dodać API 
        const apiKey = '';
        const data = {
            model: "TheBloke/Mistral-7B-Instruct-v0.1-GGUF",
            messages: history,
            temperature: 0.5,
            max_tokens: -1
        };

        const response = await axios.post('http://localhost:8000/v1/chat/completions', data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching answer:', error);
        return "Wystąpił błąd podczas odbierania odpowiedzi.";
    }
}


app.post('/get-answer', upload.none(), async (req, res) => {
    const question = req.body.input;

    if (!req.session.history) {
        req.session.history = [];
    }

    req.session.history.push({ role: "user", content: question });

    const answer = await fetchAnswer(req.session.history);

    req.session.history.push({ role: "system", content: answer });

    res.json({ answer });
});
  

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})


const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Server started: http://localhost:${PORT}`)
})