export class Message {
    message_id: number=1;
    forum_id: number;
    user_id: number;
    first_name: string;
    message: string;
    timestamp: Date; // Assuming the timestamp is received as a JavaScript Date object
  
    constructor(message_id: number=0, forum_id: number=0, user_id: number=0, first_name: string="", message: string="", timestamp: Date=new Date()) {
      this.message_id = message_id;
      this.forum_id = forum_id;
      this.user_id = user_id;
      this.first_name = first_name;
      this.message = message;
      this.timestamp = timestamp;
    }
  }
  