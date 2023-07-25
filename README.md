# UserForm Example with `react-hook-form`

This repository contains a simple React component called `UserForm`. Its primary purpose is to serve as a personal reference for using the `react-hook-form` library, specifically with the `useForm` hook.

## Overview

The `UserForm` component showcases the following:

- **Integration** of `react-hook-form` with both standard HTML inputs and a third-party select component (`react-select`).
- Use of the **zod** schema for form validation, integrated with `react-hook-form` via `@hookform/resolvers/zod`.
- Handling of select components (for `country` and `role` fields) with the `useController` hook.

## Usage

To use this component, ensure you have the necessary dependencies:

```bash
npm install react-select react-hook-form zod @hookform/resolvers
```

Then, you can integrate the UserForm component into your React application.

## Note

🚨 It's a personal reference example to quickly understand and recall the usage of react-hook-form in a specific context.
