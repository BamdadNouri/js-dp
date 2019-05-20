class NewsService{

    constructor(){
        this.observers = []
    }

    subscribe(user){
        this.observers.push(user)
    }

    notifyUsers(){
        this.observers.map((user) => {
            user.sendMail()
        })
    }
}

class User{

    constructor(email){
        this.email = email
    }

    sendMail(){
        console.log(`Sending news to ${this.email}...`)
        //mailing_service.sendMail(...)
    }
}

var userA = new User('userA@app.io')
var userB = new User('userB@app.io')
var userC = new User('userB@app.io')

var news = new NewsService()

news.subscribe(userA)
news.subscribe(userB)
news.subscribe(userC)

news.notifyUsers()



