// Burger & Menu active

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () =>
{
    burger.classList.toggle('active');
    menu.classList.toggle('active')
})

// Stick Header

const header = document.querySelector('header');

const checkScroll = () =>
{
    const scroll = scrollY;

    if(scroll > 0)
    {
        header.classList.add('active');
    }
    else
    {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', checkScroll);

// Links

const menuLinks = document.querySelectorAll('.menu-links');

menuLinks.forEach(link => link.addEventListener('click', (e) =>
{
    const section = e.target.dataset.link;

    const place = document.querySelector(`.${section}`).getBoundingClientRect().top + window.pageYOffset -250;

    burger.classList.remove('active');
    menu.classList.remove('active')

    window.scrollTo({top: place, behavior: "smooth"})
}))


// Contact

const firstContactItem = document.querySelector('.contact-name');
const secondContactItem = document.querySelector('.contact-email');

const input = document.querySelectorAll('form input');
input.forEach(input => input.addEventListener('input', (e) =>
{
    const type = e.target.value;
    const inputType = e.target.dataset.contact;

    if(type !== '' && inputType === 'name')
    {
        firstContactItem.classList.add('active');
    }
    else if(type === '' && inputType === 'name')
    {
        firstContactItem.classList.remove('active');
    }

    if(type !== '' && inputType === 'email')
    {
        secondContactItem.classList.add('active');
    }
    else if(type === '' && inputType === 'email')
    {
        secondContactItem.classList.remove('active');
    }

}));


const newProject = (project) => 
{
    return `<div class="project-card-js">
    <div class="project-content">
        <div class="project-title">
            <p class="project-card-title js">${project.title}</p>
        </div>
        <p class="project-card-description js">${project.description}</p>
        <hr>
        <div class="project-link">
        <p class="project-link-title">Links to the project:</p> 
        <div class="project-link-content">
        <a href='${project.linkWebsite}' target="blank"><img src="images/icons/www.png" alt="website-icon" class="project-website-icon"></a>
        <a href='${project.linkGithub}' target="blank"><img src="images/icons/GithubIcon.svg" alt="hithub-icon" class="project-github-icon"></a>
        </div>
        </div>
        <div class="technologies-title">
            <p class="technologies-card-title js">Technologies used</p>
            <div class="technologies-icons js">
                <img src="images/icons/html5.svg" alt="html5-image" class="technologies-image">
                <img src="images/icons/css-svgrepo-com.svg" alt="css-image" class="technologies-image">
                <img src="images/icons/javascript-svgrepo-com.svg" alt="javascript-image" class="technologies-image">
            </div>
        </div>
    </div>
    <button class="close-project-btn">X</button>
</div>`
}

const createNewProject = (value) =>
{
    const newProjectContainer = document.createElement('div');
    newProjectContainer.className = 'project-container';
    newProjectContainer.innerHTML = newProject(value);

    document.body.appendChild(newProjectContainer);

    const closeProjectBtn = document.querySelector('.close-project-btn');
    closeProjectBtn.addEventListener('click', (e) =>
    {
        const projectContainer = document.querySelector('.project-container');
        projectContainer.remove();
        mainContainer.style.pointerEvents='auto';
    });

    const mainContainer = document.querySelector('.main-container')
    mainContainer.style.pointerEvents='none';

}

const firstProject = document.querySelector('.first');
firstProject.addEventListener('click', () =>
{
    createNewProject({title: 'First Project', description: 'One of my first projects is a simple calculator  based on Javascript. There are some interesting functions like calculations history or history cleaning.', linkWebsite: 'https://azgeda-js-calculator.netlify.app', linkGithub: 'https://github.com/Azgeda-debug/JS-Calculator'})
});

const secondProject = document.querySelector('.second');
secondProject.addEventListener('click', () =>
{
    createNewProject({title: 'Second Project', description: 'The next project is a game - Rock Paper Scissors. Also based on Javascript. The game is single-player, a user can play against the computer and try his luck.', linkWebsite: 'https://azgeda-rock-paper-scissors-the-game.netlify.app', linkGithub: 'https://github.com/Azgeda-debug/Rock-Paper-Scissors---Javascript-'})
});

// const thirdProject = document.querySelector('.third');
// thirdProject.addEventListener('click', () =>
// {
//     createNewProject({title: 'Third Project', description: 'This is an online store project. It is a slightly larger project than the others. So far, there are only phones and a few categories. Mostly based on CSS and Javascript. The project is under development', linkWebsite: 'https://azgeda-shop-website.netlify.app', linkGithub: 'https://github.com/Azgeda-debug/Website'})
// });

const fourthProject = document.querySelector('.third');
fourthProject.addEventListener('click', () =>
{
    createNewProject({title: 'Fourth Project', description: 'My third project is a random password generator. It was written in Javascript and has some interesting options, for example: password strength. The user can also choose how many characters he wants to have in his password.', linkWebsite: 'https://random-password-generator-azgeda.netlify.app', linkGithub: 'https://github.com/Azgeda-debug/Random-password-generator'})
});

const fifthProject = document.querySelector('.fourth');
fifthProject.addEventListener('click', () =>
{
    createNewProject({title: 'Fourth Project', description: 'The fourth project is the game - Hangman. It was written in JavaScript. This is the game for 2 players. One of them sets a word or phrase for the game, and the other player has to guess it. If he misses nine times, he loses', linkWebsite: 'https://azgeda-hangman.netlify.app/', linkGithub: 'https://github.com/Azgeda-debug/Hangman'})
});