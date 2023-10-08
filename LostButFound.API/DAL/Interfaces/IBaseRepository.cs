namespace LostButFound.API.DAL.Interfaces
{
    public interface IBaseRepository<T>
    {
        T Get(int id);

        bool Create(T entity);

        List<T> Select();
        
        bool Delete(T entity);
    }
}
