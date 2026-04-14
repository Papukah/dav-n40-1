var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const myProjects = [
        { id: 1, name: 'ონლაინ მაღაზია', tech: 'Node.js', completed: true },
        { id: 2, name: 'ბლოგი', tech: 'Express & EJS', completed: true },
        { id: 3, name: 'სოციალური ქსელი', tech: 'React', completed: false }
    ];

    res.render('projects', { projects: myProjects });
});

module.exports = router;