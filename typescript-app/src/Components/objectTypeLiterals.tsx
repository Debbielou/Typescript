export type Mail = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent: boolean;
};

 function SendMail(mail: Mail): string {
    return `FROM: ${mail.from}, 
    TO: ${mail.to.join(', ')}, 
    SUBJECT: ${mail.subject}, 
    BODY: ${mail.body}, 
    URGENT: ${mail.urgent}`;
}
export { SendMail };