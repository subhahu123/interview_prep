/*
This pattern decouples the sender of a request from its receiver by giving more than one object a chance to handle it. The request is passed along a chain until it is handled or reaches the end of the chain.

Think of it like customer support: you raise a ticket, and it's passed from a chatbot to an agent to a supervisor, until someone resolves it.

*/

// Handler Interface
abstract class SupportHandler {
  protected nextHandler?: SupportHandler;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(level: string): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(level);
    }
  }
}

// Concrete Handlers
class ChatBotHandler extends SupportHandler {
  handleRequest(level: string): void {
    if (level === "basic") {
      console.log("ChatBot handles basic request.");
    } else {
      super.handleRequest(level);
    }
  }
}

class AgentHandler extends SupportHandler {
  handleRequest(level: string): void {
    if (level === "intermediate") {
      console.log("Human Agent handles intermediate request.");
    } else {
      super.handleRequest(level);
    }
  }
}

class SupervisorHandler extends SupportHandler {
  handleRequest(level: string): void {
    if (level === "advanced") {
      console.log("Supervisor handles advanced request.");
    } else {
      console.log("Request level not supported.");
    }
  }
}

// Client
const chatbot = new ChatBotHandler();
const agent = new AgentHandler();
const supervisor = new SupervisorHandler();

chatbot.setNext(agent).setNext(supervisor);

// Requests
chatbot.handleRequest("basic");        // ChatBot handles
chatbot.handleRequest("intermediate"); // Agent handles
chatbot.handleRequest("advanced");     // Supervisor handles
chatbot.handleRequest("unknown");      // Not supported
