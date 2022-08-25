const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
var cors = require('cors')

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiMoviesRouter = require('./routes/api/movies');
const apiGenresRouter = require('./routes/api/genres');
const apiDashboardRouter = require('./routes/api/dashboard');
const apiAuthRouter = require('./routes/api/auth');

const authMiddleware = require("./middlewares/auth");

const app = express();
app.use(cors())

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.use('/api/auth', apiAuthRouter);

app.use(authMiddleware);
app.use('/api/movies', apiMoviesRouter);
app.use('/api/genres', apiGenresRouter);
app.use('/api/dashboard', apiDashboardRouter);


app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
