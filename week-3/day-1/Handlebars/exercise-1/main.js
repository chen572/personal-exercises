// var classData = {
//     classmates: [
//         { name: "That on gal", description: "Always has the ansswer" },
//         { name: "The weird dude", description: "Quick with a smile" },
//         { name: "Taylor", description: "Just Taylor" }
//     ]
// }


// const classMatesSource = $('#classmates-template').html();
// const classMatesTemplate = Handlebars.compile(classMatesSource);
// const classMatesNewHTML = classMatesSource(classData);

// $('#container').append(classMatesNewHTML);

// const menuData = {
//     menu: [
//         { name: "Google", link: "http://google.com", socialNetwork: true },
//         { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
//         { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//         { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
//     ]
// };


// const menuSource = $('#menu-template').html();
// const menuTemplate = Handlebars.compile(menuSource);
// const menuNewHTML = menuTemplate(menuData);

// $('.menu').append(menuNewHTML);
const obj = {
    animals: ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"],
    languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
}

const animalsRender = () => {
    const source = $('#animals-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(obj);

    $('#animal-render').append(newHTML);
};

const languagesRender = () => {
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(obj);

    $('#language-render').append(newHTML);
};

animalsRender();
languagesRender();