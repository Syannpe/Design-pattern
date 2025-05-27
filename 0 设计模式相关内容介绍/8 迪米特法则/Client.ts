/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: Desc
 * @Author: Author
 */
import Agent from "./Agent";
import Star from "./Star";
import Fans from "./Fans";
import Company from "./Company";

const agent = new Agent();
const star = new Star("林青霞");
agent.star = star;

const fans = new Fans("李四");
agent.fans = fans;

const company = new Company("黑马媒体公司");
agent.company = company;

agent.meeting();
agent.business();