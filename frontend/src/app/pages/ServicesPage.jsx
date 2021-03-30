/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchServices, servicesSelector } from '../features/services';

import ServicesList from '../components/ServicesList';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector(servicesSelector);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <main>
      <ServicesList services={services} />
    </main>
  );
};

export default ServicesPage;
