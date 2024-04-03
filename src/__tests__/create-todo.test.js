import {createTodo, createTodoOnServer} from "../create-todo";
import {mockTodo} from "../__mocks__/todos.mock";


const mockedV4 = jest.fn(() => 'abcd')

jest.mock('uuid', () => ({
  // ...jest.requireActual('uuid'),
  v4: () => mockedV4()
}));

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(mockTodo)
}))

describe('Создание дела', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  
  it('Создание объекта Списка дел, Заголовок, Выполнение и ИД', () => {
    const title = 'Learn jest';
    const expectedResult = {
      title, completed: false, id: 'abcd'
    }
    const result = createTodo(title)
    
    expect(mockedV4).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedResult)
  })
  
  it('Создание дела в списке', async () => {
    const result = await createTodoOnServer('my todo');
    
    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  
  it("Создание дела с ошибкой", async () => {
    fetch.mockRejectedValueOnce('Network Error');
    
    await expect(createTodoOnServer('my todo')).rejects.toMatch('Network Error');
  })

  it('Выбрасываем ошибку когда нет Загловока', (done) => {
    try {
      createTodo("")
      done("Ещё не дописали нашу реализацию!")
    }catch (error) {
      expect(error.message).toBe("Заголовок не может быть пустым")
      done()
    }
  })
  
  it('Выбрасываем ошибку когда нет Загловока v2', () => {
    const fnToThrow = () => createTodo();
    
    expect(fnToThrow).toThrow("Заголовок не может быть пустым");
  })
  
  it('Возврат ошибки из самой функции', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    
    const fnToThrow = () => createTodoOnServer('my todo')
      
    expect(fnToThrow).rejects.toThrow('Cannot create todo');
  })
})
