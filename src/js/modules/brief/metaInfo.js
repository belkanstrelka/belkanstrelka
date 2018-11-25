import {
  isRequired, isEmail
} from 'lib/validators';

const modelName = 'landing__brief';

export const schema = {
  i18n: true,
  model: modelName,
  onReqTranform: data => data,
  onRespErrorTranform: data => data,
  validators: {
    '': { },
    projectType: { isRequired },
    companyAbout: { isRequired },
    companyUrl: { },
    task: { isRequired },
    files: { },
    channels: { isRequired },
    goals: { },
    competitors: { },
    deadline: { isRequired },
    likes: { },
    contactName: { isRequired },
    contactEmail: { isRequired, isEmail },
    contactPosition: { },
    contactPhone: { },
  },
  placeholders: {
    projectType: 'brief.index.fieldset.projectType.placeholder',
    companyAbout: 'brief.index.fieldset.company.about.placeholder',
    companyUrl: 'brief.index.fieldset.company.url.placeholder',
    task: 'brief.index.fieldset.task.placeholder',
    files: 'brief.index.fieldset.files.placeholder',
    channels: 'brief.index.fieldset.channels.placeholder',
    goals: 'brief.index.fieldset.goals.placeholder',
    competitors: 'brief.index.fieldset.competitors.placeholder',
    deadline: 'brief.index.fieldset.deadline.placeholder',
    likes: 'brief.index.fieldset.likes.placeholder',
    contactName: 'brief.index.fieldset.contact.name',
    contactEmail: 'brief.index.fieldset.contact.email',
    contactCompany: 'brief.index.fieldset.contact.company',
    contactPhone: 'brief.index.fieldset.contact.phone',
  },
  errorLbls: {
    '': {
      isNullResp: 'brief.index.errors.isNullResp'
    },
    projectType: {
      isRequired: 'brief.index.errors.projectType.isRequired',
    },
    companyAbout: {
      isRequired: 'brief.index.errors.companyAbout.isRequired',
    },
    task: {
      isRequired: 'brief.index.errors.task.isRequired',
    },
    channels: {
      isRequired: 'brief.index.errors.channels.isRequired',
    },
    deadline: {
      isRequired: 'brief.index.errors.deadline.isRequired',
    },
    contactName: {
      isRequired: 'brief.index.errors.contactName.isRequired',
    },
    contactEmail: {
      isRequired: 'brief.index.errors.contactEmail.isRequired',
      isEmail: 'brief.index.errors.contactEmail.isEmail',
    },
  }
};

export const formReducer = {
  [modelName]: (state = {
    projectType: {},
    companyAbout: undefined,
    companyUrl: undefined,
    task: undefined,
    files: [],
    channels: {},
    goals: undefined,
    competitors: undefined,
    deadline: undefined,
    likes: undefined,
    contactName: undefined,
    contactEmail: undefined,
    contactPosition: undefined,
    contactPhone: undefined,
  }) => state
};

export const i18n = {
  en: {
    index: {
      title: 'Complete the brief',
      description: 'or see our youtube video on why briefing is so important',
      linkUpload: 'upload specs',
      uploadFiles: 'Drag and drop files here to add them to your brief',
      submitBtn: 'Submit',
      submittingBtn: 'Submitting...',
      submitLbl: 'By submitting this brief you are agreeing with our {terms} and {privacy}.',
      fieldset: {
        projectType: {
          label: 'Where can we help?',
          items: {
            design: 'UX & Design',
            usability: 'Usability',
            analytics: 'Analytics',
            consulting: 'Consulting'
          },
        },
        company: {
          about: {
            label: 'Tell us about your company in two sentences.',
            placeholder: 'Please share project URL, if any:',
          },
          url: {
            label: 'Please share project URL, if any:',
            placeholder: 'https://',
          }
        },
        task: {
          label: 'What do you want to get as a result of our collaboration? (or {linkUpload})',
          placeholder: 'What is there for us to do? Who is going to use it and how will it help your business.',
        },
        files: undefined,
        channels: {
          label: 'Which channels are we going to work with? ',
          items: {
            web: 'Web',
            mobile: 'Mobile web',
            ios: 'iOS',
            android: 'Android'
          },
        },
        goals: {
          label: 'How is this project going to affect your business?',
          placeholder: 'Please tell us about any interconnected business goals',
        },
        competitors: {
          label: 'Who are your main competitors, please include links',
          placeholder: 'https://',
        },
        deadline: {
          label: 'When are the deadlines approaching?',
          items: {
            days: 'Days',
            weeks: 'Weeks',
            months: 'Months',
          },
        },
        likes: {
          label: 'If any, links to great products you and your team like ',
          placeholder: 'https://',
        },
        contact: {
          label: 'Who should we contact regarding this brief?',
          name: 'Name',
          email: 'Email',
          company: 'Сompany',
          phone: 'Phone',
        },
      },
      errors: {
        isNullResp: 'Something went wrong',
        projectType: {
          isRequired: 'Field is required'
        },
        companyAbout: {
          isRequired: 'Field is required'
        },
        task: {
          isRequired: 'Field is required'
        },
        channels: {
          isRequired: 'Field is required'
        },
        deadline: {
          isRequired: 'Field is required'
        },
        contactName: {
          isRequired: 'Field is required'
        },
        contactEmail: {
          isRequired: 'Field is required',
          isEmail: "Not correct email",
        },
      }
    }
  },
  ru: {
    index: {
      title: 'Расскажите о задаче',
      description: 'или посмотрите наше видео, чтобы понять почему это так важно',
      linkUpload: 'загрузите ТЗ',
      uploadFiles: 'Перетащите файлы на страницу, чтобы добавить их к брифу',
      submitBtn: 'Отправить',
      submittingBtn: 'Отправляется...',
      submitLbl: 'Нажимая кнопку, вы соглашаетесь с нашими {terms} и {privacy}.',
      fieldset: {
        projectType: {
          label: 'Какая услуга нужна?',
          items: {
            design: 'UX & Дизайн',
            usability: 'Usability',
            analytics: 'Аналитика',
            consulting: 'Консалтинг'
          },
        },
        company: {
          about: {
            label: 'Расскажите в двух словах о своей компании:',
            placeholder: 'Что делает компания и как зарабатывает деньги',
          },
          url: {
            label: 'Ссылка на обсуждаемый проект, если есть',
            placeholder: 'https://',
          }
        },
        task: {
          label: 'В чем состоит задача? (или {linkUpload})',
          placeholder: 'Что мы будем создавать или улучшать?',
        },
        files: undefined,
        channels: {
          label: 'Какие проекции нужны?',
          items: {
            web: 'Web',
            mobile: 'Мобильный web',
            ios: 'iOS',
            android: 'Android'
          },
        },
        goals: {
          label: 'Какие цели нужно достичь?',
          placeholder: 'Расскажите о важных бизнес-целях, на которые влияет задача.',
        },
        competitors: {
          label: 'Кто основные конкуренты проекта, укажите ссылки:',
          placeholder: 'https://',
        },
        deadline: {
          label: 'Насколько сжатые сроки у задачи?',
          items: {
            days: 'Дни',
            weeks: 'Недели',
            months: 'Месяцы',
          },
        },
        likes: {
          label: 'Поделитесь продуктами, которые вам нравятся:',
          placeholder: 'https://',
        },
        contact: {
          label: 'Ваши контакты',
          name: 'Имя',
          email: 'Email',
          company: 'Компания',
          phone: 'Телефон',
        },
      },
      errors: {
        isNullResp: 'Что-то пошло не так...',
        projectType: {
          isRequired: 'Необходимо выбрать одно или несколько значений'
        },
        companyAbout: {
          isRequired: 'Поле обязательно'
        },
        task: {
          isRequired: 'Поле обязательно'
        },
        channels: {
          isRequired: 'Необходимо выбрать одно или несколько значений'
        },
        deadline: {
          isRequired: 'Необходимо указать срочность проекта'
        },
        contactName: {
          isRequired: 'Поле обязательно'
        },
        contactEmail: {
          isRequired: 'Поле обязательно',
          isEmail: 'Поле имеет неверный формат',
        },
      }
    }
  }
};
