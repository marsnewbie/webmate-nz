{
  "name": "ContactInquiry",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "客户姓名 / Client Name"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "电子邮箱 / Email"
    },
    "phone": {
      "type": "string",
      "description": "联系电话 / Phone"
    },
    "company": {
      "type": "string",
      "description": "公司名称 / Company Name"
    },
    "project_type": {
      "type": "string",
      "enum": [
        "starter",
        "business",
        "premium",
        "custom"
      ],
      "description": "项目类型 / Project Type"
    },
    "budget": {
      "type": "string",
      "enum": [
        "199-499",
        "500-999",
        "1000-2999",
        "3000+"
      ],
      "description": "预算范围 / Budget Range"
    },
    "message": {
      "type": "string",
      "description": "项目详情 / Project Details"
    },
    "language": {
      "type": "string",
      "enum": [
        "en",
        "zh"
      ],
      "default": "en",
      "description": "咨询语言 / Inquiry Language"
    },
    "status": {
      "type": "string",
      "enum": [
        "new",
        "contacted",
        "quoted",
        "converted",
        "closed"
      ],
      "default": "new",
      "description": "状态 / Status"
    }
  },
  "required": [
    "name",
    "email",
    "message"
  ]
}