// Page that loads shared list based on URL param
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3356294918.
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSharedList } from '../api/sharedListApi';
import ItemList from '../components/ItemList';

function SharedList() {
  const { listId } = useParams();
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await getSharedList(listId);
        setList(data);
      } catch (err) {
        setError(err.message || 'Failed to load list');
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [listId]);

  if (loading) return <div>Cargando ...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!list) return <div>Upss. no encontramos la lista que deseas ver.</div>;

  return (
    <div>
      <h2>{list.name}</h2>
      <ItemList items={list.items} />
    </div>
  );
}

export default SharedList;
