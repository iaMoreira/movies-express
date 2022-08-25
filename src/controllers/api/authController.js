const { User } = require('../../database/models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    login: async function (req, res) {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ mensagem: "Email ou senha estão incorretos ou não existem!" });
        }
        
        const token = jwt.sign({data: user}, 'MEU_CODIGO_SECRETO', { expiresIn: '1h' });

        return res.json({ token, user })
    },
    register: async function (req, res) {
        const {name, email, password} = req.body;

        const hash = bcrypt.hashSync(password, 10);

        const newUser = await User.create({name, email, password: hash});

        return res.status(201).json(newUser);
    }
}

module.exports = authController