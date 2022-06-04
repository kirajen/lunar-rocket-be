export const isOutOfOrder = (messageTime, lastMessageTime) => {
  return lastMessageTime > messageTime;
};