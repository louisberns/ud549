class AddressBook {
  constructor() {
    this.contact = [];
    this.initialComplete = false;
  }
  addContact(contact) {
    this.contact = [contact];
  }
  getContact(index) {
    return this.contact[index];
  }
  deleteContact(index) {
    return this.contact -= this.contact[index];
  }
  getInitialContacts(cb) {
    var self = this;

    setTimeout(() => {
      self.initialComplete = true;
      if (cb) {
        return cb();
      }
    }, 3);
  }
}
