const BASEURL = ""
const LOCALURL = "http://localhost:3000"

const prefix = LOCALURL
const URL = {
  login:prefix+"/user/login",
  register:prefix+"/user/register",
  get_self_message_content:prefix+"/self-message/get_self_message_content",
  add_self_message_content:prefix+"/self-message/add_self_message_content",
  detele_self_message_content:prefix+"/self-message/detele_self_message_content"
}

module.exports = URL
