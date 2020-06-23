const family = () => {
    const members = [];

    const birth = name => {
        members.push(name)
        console.log(members)
    };

    return birth
};

const giveBirth = family();
// giveBirth('chen')
// giveBirth('tal')
// giveBirth('gal')
// giveBirth('aa')

const MathOperations = () => {
    const add = (x, y) => x + y;

    const subtract = (x, y) => x - y;

    const multiply = (x, y) => x * y;

    const divide = (x, y) => x / y;

    return { add, subtract, multiply, divide };
};

const calculator = MathOperations();

const check1 = calculator.add(13, 29);
const check2 = calculator.multiply(1.75, 24);
const check3 = calculator.multiply(7, calculator.divide(36, 6));

// console.log(check1, check2, check3)

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Chen')
// usersModule.listUsers()
// console.log(usersModule.users)

const StringFormatter = () => {
    const capitalizeFirst = str => str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();

    const skewerCase = str => str.replace(' ', '-');

    return { capitalizeFirst, skewerCase }
};

const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

const Bank = () => {
    let money = 500;

    const depositCash = cash => { money += cash };

    const checkBalance = () => { console.log(money) };

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
};

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950


const SongsManager = () => {
    const songs = {

    }

    const addSong = (songName, url) => { songs[songName] = url.slice(32, url.length) };

    const getSong = songName => `https://www.youtube.com/watch?v=${songs[songName]}`;

    const logSongList = () => { console.log(songs) };

    return { addSong, getSong, logSongList }
};

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
console.log(songsManager.getSong('how long'));
console.log(songsManager.getSong('ain\'t me'));

songsManager.logSongList();