import amqplib, {
  Channel,
  Connection,
  credentials,
} from "../pageview-api/node_modules/amqplib";

export class RabbitMq {
  private connection: Connection;
  public channel: Channel;
  private hostname: string;
  private port: string;

  private username: string;
  private password: string;

  constructor(
    hostname: string,
    port: string,
    username: string,
    password: string
  ) {
    this.hostname = hostname;
    this.port = port;
    this.username = username;
    this.password = password;
    this.connectRmq();
  }

  private async connectRmq() {
    try {
      this.connection = await amqplib.connect(
        `amqp://${this.hostname}:${this.port}`,
        {
          credentials: credentials.plain(this.username, this.password),
        }
      );
    } catch (error: any) {
      console.error(
        `Error during connecting to rabbitmq: ${error.message}\n`,
        error
      );
    }
  }

  public async loadChannel(
    queue: string,
    options?: amqplib.Options.assertQueue
  ) {
    try {
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue(queue, options);
    } catch (error: any) {
      console.error(
        `Error during creating channel / asseting queue in rabbitmq: ${error.message}\n`,
        error
      );
    }
  }
}