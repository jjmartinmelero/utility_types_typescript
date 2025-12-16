

function sendMessage(chatId: string, message: string, attachment?: File) {

}

type SendMessageParams = Parameters<typeof sendMessage>;

type ChatId = SendMessageParams[0];
type Message = SendMessageParams[1];
type Attachment = SendMessageParams[2];

const sendMessageParams: SendMessageParams = ["general", "hello world !", new File([""], "file.txt")];


sendMessage(...sendMessageParams);
