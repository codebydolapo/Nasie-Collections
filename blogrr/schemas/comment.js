export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Unapproved Comments wont show unless approved"
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [{type: 'post'}]
    },
    
  ],

  
};
