// Creating object for email
var emailData = {
  name:'Gmail',
  mailboxes: [
    'Inbox',
    'Starred',
    'Snoozed',
    'Drafts'
  ],
  contacts: [
    {name: 'Cecil', email: "cecil.diesel@gmail.com", postiion: "Co-founder", recentMessage: "Education Report"},
    {name: 'Bob', email: "bob.snob@gmail.com", postiion: "Pres", recentMessage: "Wednesday Meeting"},
    {name: 'Brett', email: "brett.lax22@hotmail.com", postiion: "Dude", recentMessage: "What up"},
  ],
  inboxMessages: [
    {subject: "What up", sender: 'Brett', unread: false},
    {subject: "Education Report", sender: 'Cecil', unread: true},
    {subject: "Wednesday Meeting", sender: 'Bob', unread: false},
  ],
  draftMessages: [
    {subject: "Nothin' much", recipient: 'Brett', empty: false},
    {subject: "Sounds good", recipient: 'Cecil', empty: false},
    {subject: "This afternoon", recipient: 'Bob', empty: false},
    {subject: "Matrix Reloaded: the best matrix?", recipient: 'Brett', empty: false},
  ]
}
// List of mailboxes
console.log(emailData.mailboxes.toString());
// List of mailboxes
var emails = []
var i = 0;
for (i; i < emailData.contacts.length; i++){
  var email = emailData.contacts[i].email;
  emails.push(email)
}
console.log(emails.toString());
// Title of second visible visible message
console.log(emailData.inboxMessages[1].subject);
// Change email to read
emailData.inboxMessages[1].unread = false;
// add email to draft emails
var numDrafts = emailData.draftMessages.length;
emailData.draftMessages[numDrafts] = {subject: "Big Lebowski Fan Fiction idea", recipient: 'Chad', empty: false};
